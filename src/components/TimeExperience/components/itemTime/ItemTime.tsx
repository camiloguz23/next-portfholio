import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import style from './itemTime.module.scss';

interface Prop {
  onShow: (id: boolean) => void;
  date: string;
  nameCompany: string;
}

function ItemTime({ onShow, date, nameCompany }: Prop): JSX.Element {
  return (
    <TimelineItem>
      <TimelineOppositeContent color='text.secondary'>
        <span className={style.date}>{date}</span>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color='info' />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <span
          className={style.companies}
          onClick={() => {
            onShow(true);
          }}
        >
          {nameCompany}
        </span>
      </TimelineContent>
    </TimelineItem>
  );
}

export default ItemTime;
