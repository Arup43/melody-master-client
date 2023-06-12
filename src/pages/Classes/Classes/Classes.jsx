import Class from "../Class/Class";

const Classes = () => {
  return (
    <div className="pt-52 text-center max-w-screen-xl mx-auto mb-20">
      <h1 className="text-4xl">Explore Our All Classes</h1>
      <p className="mb-10">Choose what you want to learn</p>
      <div className="grid md:grid-cols-3 gap-10">
        <Class
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Learn Guitar like a pro"
          instructor="Kuddus Alam"
          availableSeats={23}
          price={230}
        ></Class>
        <Class
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Learn Guitar like a pro"
          instructor="Kuddus Alam"
          availableSeats={23}
          price={230}
        ></Class>
        <Class
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Learn Guitar like a pro"
          instructor="Kuddus Alam"
          availableSeats={23}
          price={230}
        ></Class>
        <Class
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Learn Guitar like a pro"
          instructor="Kuddus Alam"
          availableSeats={23}
          price={230}
        ></Class>
        <Class
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Learn Guitar like a pro"
          instructor="Kuddus Alam"
          availableSeats={23}
          price={230}
        ></Class>
        <Class
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Learn Guitar like a pro"
          instructor="Kuddus Alam"
          availableSeats={23}
          price={230}
        ></Class>
      </div>
    </div>
  );
};

export default Classes;
