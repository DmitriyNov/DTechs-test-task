import {User} from '../App';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default function UserCard(props: User) {
  const roles: string = '';
  const workBorders: string = '';
  props.roles.forEach((element) => roles + element + ' ');
  props.workBorders.forEach((element: any) => workBorders + element.name + ' ');


  return (
    <Card className="Card">
      <Card.Header>{props.userName}</Card.Header>
      <Card.Body className="Card-body">
            <Card.Title className="Card-title">
              <p>
                {props.firstName}
              </p>
              <p>
                {props.latsName}
              </p>
            </Card.Title>
            <Card.Text className="Card-text">
              <p>
                Roles: <span>{roles}</span>
              </p>
              <p>
                Borders of the work: <span>{workBorders}</span>
              </p>
            </Card.Text>
            <Button className="Card-button" variant="primary">
              Edit
            </Button>
      </Card.Body>
    </Card>
  );
}
