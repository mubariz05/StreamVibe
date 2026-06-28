import { useState, useCallback } from "react";
import { useAuth } from "../context/AuthContext";

const API_BASE = "/api/subscriptions";

export const useSubscription = () => {
    const { user } = useAuth();
    const [subscription, setSubscription] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getToken = async () => {
        if (!user) throw new Error("Not authenticated");
        return user.getIdToken();
    };

    const fetchSubscription = useCallback(async () => {
        if (!user) return;
        setLoading(true);
        setError(null);
        try {
            const token = await user.getIdToken();
            const res = await fetch(`${API_BASE}/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error("Failed to fetch subscription");
            const data = await res.json();
            setSubscription(data.subscription ?? null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [user]);

    const subscribe = useCallback(
        async (planId, billingCycle, isTrial = false) => {
            setLoading(true);
            setError(null);
            try {
                const token = await getToken();
                const res = await fetch(`${API_BASE}/subscribe`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        plan_id: planId,
                        billing_cycle: billingCycle,
                        is_trial: isTrial,
                    }),
                });
                if (!res.ok) {
                    const errData = await res.json().catch(() => ({}));
                    throw new Error(errData.message || "Subscription failed");
                }
                const data = await res.json();
                setSubscription(data.subscription ?? null);
                return data;
            } catch (err) {
                setError(err.message);
                throw err;
            } finally {
                setLoading(false);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [user]
    );

    return { subscription, loading, error, subscribe, fetchSubscription };
};