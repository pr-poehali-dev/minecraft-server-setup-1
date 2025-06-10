import { useState, useEffect } from "react";
import ServerStatus from "@/components/ServerStatus";
import PlayerCounter from "@/components/PlayerCounter";
import PlayerList from "@/components/PlayerList";
import ServerInfo from "@/components/ServerInfo";

const Index = () => {
  const [players, setPlayers] = useState([
    { name: "Steve", playTime: "2ч 15мин" },
    { name: "Alex", playTime: "45мин" },
    { name: "Notch", playTime: "1ч 30мин" },
    { name: "Herobrine", playTime: "3ч 22мин" },
  ]);

  const serverData = {
    address: "mc.example.com:25565",
    name: "Awesome Minecraft Server",
    motd: "Добро пожаловать на лучший сервер! Выживание, креатив, мини-игры",
    version: "1.20.4",
    gameMode: "Survival",
    difficulty: "Hard",
    worldSize: "15.2 GB",
    currentPlayers: players.length,
    maxPlayers: 100,
  };

  return (
    <div className="min-h-screen bg-minecraft-light font-roboto">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-minecraft-brown mb-2">
            🎮 Minecraft Server Monitor
          </h1>
          <p className="text-gray-600">
            Отслеживайте статус и активность вашего сервера в реальном времени
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <ServerStatus serverAddress={serverData.address} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PlayerCounter
                currentPlayers={serverData.currentPlayers}
                maxPlayers={serverData.maxPlayers}
              />
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  📊 Статистика сервера
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Аптайм:</span>
                    <span className="font-semibold">15д 7ч 32мин</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">TPS:</span>
                    <span className="font-semibold text-green-600">19.8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Память:</span>
                    <span className="font-semibold">4.2/8 GB</span>
                  </div>
                </div>
              </div>
            </div>

            <ServerInfo {...serverData} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <PlayerList players={players} />

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                🔥 Последние события
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">
                    Steve присоединился к серверу
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">Alex построил дом</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-gray-600">Notch убил дракона</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-gray-600">Herobrine нашел алмазы</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
