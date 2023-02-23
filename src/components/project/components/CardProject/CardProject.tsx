import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import style from './card.module.scss';
import { type CardModel } from '../../model';

function CardProject({ github, image, page, title, description }: CardModel): JSX.Element {
  return (
    <Card sx={{ maxWidth: 500, borderRadius: 2 }}>
      <CardMedia sx={{ height: 300 }} image={image} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div' className={style.font}>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary' className={style.font}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a className={`${style.anchor} ${style.font}`} target='_blank' href={github} rel='noreferrer'>
          Github
        </a>
        <a className={`${style.anchor} ${style.font}`} target='_blank' href={page} rel='noreferrer'>
          Page
        </a>
      </CardActions>
    </Card>
  );
}

export default CardProject;
