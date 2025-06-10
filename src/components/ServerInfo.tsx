import Icon from "@/components/ui/icon";

interface ServerInfoProps {
  serverName: string;
  motd: string;
  version: string;
  gameMode: string;
  difficulty: string;
  worldSize: string;
}

const ServerInfo = ({
  serverName,
  motd,
  version,
  gameMode,
  difficulty,
  worldSize,
}: ServerInfoProps) => {
  const infoItems = [
    { label: "Версия", value: version, icon: "Package" },
    { label: "Режим игры", value: gameMode, icon: "Gamepad2" },
    { label: "Сложность", value: difficulty, icon: "Zap" },
    { label: "Размер мира", value: worldSize, icon: "Globe" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{serverName}</h2>
        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-minecraft-green">
          <p className="text-gray-700 italic">"{motd}"</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <Icon
              name={item.icon as any}
              size={20}
              className="text-minecraft-brown"
            />
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-semibold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerInfo;
