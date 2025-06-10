import Icon from "@/components/ui/icon";

interface PlayerCounterProps {
  currentPlayers: number;
  maxPlayers: number;
}

const PlayerCounter = ({ currentPlayers, maxPlayers }: PlayerCounterProps) => {
  const percentage = (currentPlayers / maxPlayers) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Icon name="Users" size={24} className="text-minecraft-brown" />
        <h3 className="text-lg font-semibold text-gray-800">Игроки онлайн</h3>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-3xl font-bold text-minecraft-green">
            {currentPlayers}
          </span>
          <span className="text-lg text-gray-500">/ {maxPlayers}</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-minecraft-green h-3 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <p className="text-sm text-gray-600 text-center">
          Заполнено на {Math.round(percentage)}%
        </p>
      </div>
    </div>
  );
};

export default PlayerCounter;
