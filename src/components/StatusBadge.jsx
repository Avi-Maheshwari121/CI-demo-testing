export const StatusBadge = ({ status }) => {
  const isOnline = status === 'online';
  
  return (
    <div 
      data-testid="status-badge" 
      className={isOnline ? 'text-green-500' : 'text-red-500'}
    >
      {isOnline ? 'System Online' : 'System Offline'}
    </div>
  );
};