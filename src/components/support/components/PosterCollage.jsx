export const PosterCollage = ({ posterImages }) => {
  return (
    <div className="support-left__posters">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className={`poster poster--${i + 1}`}>
          {posterImages[i] && (
            <img src={posterImages[i]} alt={`poster ${i + 1}`} />
          )}
        </div>
      ))}
    </div>
  );
};
