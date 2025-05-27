type FallbackMessageProps = {
  message: string;
};

export default function FallbackMessage({ message }: FallbackMessageProps) {
  return   <div className="flex items-center justify-center min-h-[300px] w-full">
  <p className="text-center text-gray-500 text-lg">{message}</p>
</div>;
}
