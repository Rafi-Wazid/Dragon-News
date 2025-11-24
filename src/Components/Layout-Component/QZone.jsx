import swimming from '../../assets/swimming.png'
import Class from '../../assets/class.png'
import playGround from '../../assets/playground.png'

const QZone = () => {
  return (
    <div>
      <h2 className="font font-semibold mb-3">Q-Zone</h2>
      <div className='*:w-full'>
        <div className="card bg-base-200 w-96 shadow-sm py-5">
          <figure>
            <img
              src={swimming}
              alt="Swimming"
            />
          </figure>
        </div>
        <div className="card bg-base-200 w-96 shadow-sm py-5">
          <figure>
            <img
              src={Class}
              alt="class"
            />
          </figure>
        </div>
        <div className="card bg-base-200 w-96 shadow-sm py-5">
          <figure>
            <img
              src={playGround}
              alt="Play Ground"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default QZone;
