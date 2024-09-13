import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${className} flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur`}
    >
      <img
        src={notification1}
        alt="image"
        width={62}
        height={62}
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 text-base font-semibold">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex h-6 w-6 overflow-hidden rounded-full border-2 border-n-12"
              >
                <img
                  src={item}
                  alt={item}
                  width={20}
                  height={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>

          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
