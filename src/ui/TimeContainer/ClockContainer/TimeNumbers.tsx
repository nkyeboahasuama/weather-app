const TimeNumbers = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((time) => (
        <div key={time} className={`text-white number number${time}`}>
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimeNumbers;
