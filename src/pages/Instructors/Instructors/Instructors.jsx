import Instructor from "../Instructor/Instructor";

const Instructors = () => {
    return (
        <div className="pt-52 text-center max-w-screen-xl mx-auto mb-20">
      <h1 className="text-4xl">Visit Our All Teachers</h1>
      <p className="mb-10">Choose with whom you want to learn your dream instrument.</p>
      <div className="grid md:grid-cols-3 gap-10">
        <Instructor
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Kuddus Alam"
          email= "kuddos@alam.com"
        ></Instructor>
        <Instructor
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Kuddus Alam"
          email= "kuddos@alam.com"
        ></Instructor>
        <Instructor
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Kuddus Alam"
          email= "kuddos@alam.com"
        ></Instructor>
        <Instructor
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Kuddus Alam"
          email= "kuddos@alam.com"
        ></Instructor>
        <Instructor
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Kuddus Alam"
          email= "kuddos@alam.com"
        ></Instructor>
        <Instructor
          image="https://www.superprof.ca/blog/wp-content/uploads/2017/07/guitar-guitar-player-musician-instrument-guitarist.jpg"
          name="Kuddus Alam"
          email= "kuddos@alam.com"
        ></Instructor>
      </div>
    </div>
    );
};

export default Instructors;