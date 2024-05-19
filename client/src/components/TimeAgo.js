import {useTimeAgo} from "../hooks/useTimeAgo";

export default function TimeAgo({date}) {
  const {days, hours, minutes, seconds} = useTimeAgo(date);

  if (days) {
    return (
      <span>
        {days} ngày.
      </span>
    );
  }

  if (hours) {
    return (
      <span>
        {hours} giờ.
      </span>
    );
  }

  if (minutes) {
    return (
      <span>
        {minutes} phút.
      </span>
    );
  }

  if (seconds) {
    return (
      <span>
        {seconds} giây.
      </span>
    );
  }
}