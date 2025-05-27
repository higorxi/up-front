export default function Loading() {
  return (
    <div className="flex justify-center items-center p-8 min-h-[300px]">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-muted-foreground">Carregando cadastros...</p>
      </div>
    </div>
  );
}
