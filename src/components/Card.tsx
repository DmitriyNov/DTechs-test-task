import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function UserCard() {
  return (
    <Card className="Card">
      <Card.Header>UserName</Card.Header>
      <Card.Body className="Card-body">
            <Card.Title className="Card-title">
              <p>
                First name
              </p>
              <p>
                Last Name
              </p>
            </Card.Title>
            <Card.Text className="Card-text">
              <p>
                Roles: <span>roles...</span>
              </p>
              <p>
                Borders of the work: <span>workBorders...</span>
              </p>
            </Card.Text>
            <Button className="Card-button" variant="primary">
              Edit
            </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
