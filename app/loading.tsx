export default function Loading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground"></div>
      </div>
    </div>
  );
}

