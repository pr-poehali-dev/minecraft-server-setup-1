import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface ServerStatusProps {
  serverAddress: string;
}

const ServerStatus = ({ serverAddress }: ServerStatusProps) => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const [ping, setPing] = useState<number | null>(null);

  useEffect(() => {
    // Симуляция проверки статуса сервера
    const checkStatus = () => {
      const randomOnline = Math.random() > 0.3;
      const randomPing = Math.floor(Math.random() * 200) + 20;

      setIsOnline(randomOnline);
      setPing(randomOnline ? randomPing : null);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);

    return () => clearInterval(interval);
  }, [serverAddress]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-minecraft-green">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div
            className={`w-4 h-4 rounded-full ${
              isOnline === null
                ? "bg-gray-400 animate-pulse"
                : isOnline
                  ? "bg-green-500 animate-pulse"
                  : "bg-red-500"
            }`}
          ></div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Статус сервера
            </h3>
            <p className="text-gray-600">{serverAddress}</p>
          </div>
        </div>
        <div className="text-right">
          <p
            className={`text-lg font-bold ${
              isOnline === null
                ? "text-gray-500"
                : isOnline
                  ? "text-green-600"
                  : "text-red-600"
            }`}
          >
            {isOnline === null
              ? "Проверка..."
              : isOnline
                ? "Онлайн"
                : "Оффлайн"}
          </p>
          {ping && <p className="text-sm text-gray-500">Пинг: {ping}мс</p>}
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;
