import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSubscription } from "../../api/Usesubscription";
import "../Profile/index.css";

const getInitials = (user) => {
  const name = user?.displayName || user?.email || "";
  return name.slice(0, 2).toUpperCase();
};

const formatDate = (dateStr) => {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const StatusBadge = ({ status }) => {
  const map = {
    active: { label: "Active", cls: "ps--active" },
    trial: { label: "Trial", cls: "ps--trial" },
    expired: { label: "Expired", cls: "ps--expired" },
  };
  const s = map[status?.toLowerCase()] ?? { label: status ?? "—", cls: "" };
  return <span className={`profile-status ${s.cls}`}>{s.label}</span>;
};

const Profile = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const {
    subscription,
    loading: subLoading,
    fetchSubscription,
  } = useSubscription();

  useEffect(() => {
    if (!isLoading && !user) navigate("/", { replace: true });
  }, [user, isLoading, navigate]);

  useEffect(() => {
    if (user) fetchSubscription();
  }, [user, fetchSubscription]);

  if (isLoading || !user) return null;

  return (
    <div className="profile-page">
      <div className="profile-wrapper">
        <section className="profile-card">
          <div className="profile-avatar">{getInitials(user)}</div>
          <div className="profile-user-info">
            <h1 className="profile-username">{user.displayName || "User"}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </section>

        <section className="profile-section">
          <h2 className="profile-section__title">Active Subscription</h2>

          {subLoading ? (
            <p className="profile-sub-loading">Loading subscription…</p>
          ) : subscription ? (
            <div className="profile-sub-card">
              <div className="profile-sub-grid">
                <div className="profile-sub-item">
                  <span className="profile-sub-label">Plan</span>
                  <span className="profile-sub-value">
                    {subscription.plan_name}
                  </span>
                </div>
                <div className="profile-sub-item">
                  <span className="profile-sub-label">Billing cycle</span>
                  <span className="profile-sub-value profile-sub-value--cap">
                    {subscription.billing_cycle}
                  </span>
                </div>
                <div className="profile-sub-item">
                  <span className="profile-sub-label">Started</span>
                  <span className="profile-sub-value">
                    {formatDate(subscription.start_date)}
                  </span>
                </div>
                <div className="profile-sub-item">
                  <span className="profile-sub-label">Expires</span>
                  <span className="profile-sub-value">
                    {formatDate(subscription.end_date)}
                  </span>
                </div>
                <div className="profile-sub-item">
                  <span className="profile-sub-label">Status</span>
                  <StatusBadge status={subscription.status} />
                </div>
              </div>
              <Link to="/subscriptions" className="profile-change-plan">
                Change Plan →
              </Link>
            </div>
          ) : (
            <div className="profile-no-sub">
              <p className="profile-no-sub__text">No active subscription</p>
              <Link to="/subscriptions" className="profile-no-sub__cta">
                Choose a Plan
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;
