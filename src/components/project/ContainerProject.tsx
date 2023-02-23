import style from './ContainerProject.module.scss';
import { CardProject } from './components';
import { type CardModel } from './model';

function ContainerProject(): JSX.Element {
  const projectList: CardModel[] = [
    {
      title: 'Chat GPT',
      github: 'https://github.com/camiloguz23/copy-chatgpt',
      image: 'https://i.imgur.com/R6Udzyi.png',
      page: 'https://copy-chatgpt.vercel.app/',
      description:
        'this project is make in Next JS and typescript and use the Open AI api for we could send the questions and AI answer our questions'
    }
  ];

  return (
    <div className={style.containerProject}>
      {projectList.map((item, index) => (
        <CardProject key={index} {...item} />
      ))}
    </div>
  );
}

export default ContainerProject;
