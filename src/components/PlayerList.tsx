import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Player {
  name: string;
  avatar?: string;
  playTime: string;
}

interface PlayerListProps {
  players: Player[];
}

const PlayerList = ({ players }: PlayerListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Игроки сейчас в игре
      </h3>

      {players.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>Никого нет онлайн 😔</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {players.map((player, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src={
                    player.avatar ||
                    `https://api.mineatar.io/face/${player.name}`
                  }
                  alt={player.name}
                />
                <AvatarFallback className="bg-minecraft-brown text-white">
                  {player.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{player.name}</p>
                <p className="text-sm text-gray-500">
                  Играет: {player.playTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayerList;
