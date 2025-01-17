const ErrorContainer = ({ error }: { error: string | null }) => {
  return (
    <div className="h-5">
      {error && <span className="text-red-600">{error}</span>}
    </div>
  );
};

export default ErrorContainer;
