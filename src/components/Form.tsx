import {useState} from 'react';
import {User} from '../App';
import {userList} from '../App';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Select from 'react-select';

export const currentUser: User = {
  userName: '',
  password: '',
  firstName: '',
  latsName: '',
  roles: [],
  workBorders: []
}

export default function UserForm() {
  interface option {
    readonly value: string;
    readonly label: string;
  }
  const rolesOptions: readonly option[] = [
    {value:'ANT', label: 'ANT'},
    {value: 'ANT_MANAGER', label: 'ANT_MANAGER'},
    {value:'ANT_OFFICER', label: 'ANT_OFFICER'},
    {value:'DEVELOPER', label: 'DEVELOPER'}
  ];
  const workBordersOption: readonly option[] = [
    {value: '{"id":"1","name":"Белгатой"}', label: 'Белгатой'},
    {value: '{"id":"2","name":"Шали"}', label: 'Шали'},
    {value: '{"id":"3","name":"Урус-Мартан"}', label: 'Урус-Мартан'}
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit: any = (event: any) => {
    event.preventDefault();
    currentUser.userName = event.target.username.value;
    currentUser.password = event.target.password.value;
    currentUser.firstName = event.target.firstname.value;
    currentUser.latsName = event.target.lastname.value;
    currentUser.roles = [];
    currentUser.workBorders = [];

    if (!event.target.roles.value) {
      alert('Select at least one value of role');
      return;
    } else if (!event.target.roles.length) {
      currentUser.roles.push(event.target.roles.value);
    } else {
      event.target.roles.forEach((element: any) => {
        currentUser.roles.push(element.value);
      })
    }

    if (!event.target.workborders.value) {
      alert('Select at least one value of workborders');
      return;
    } else if (!event.target.workborders.length) {
      currentUser.workBorders.push(JSON.parse(event.target.workborders.value));
    } else {
      for (const value of event.target.workborders.values()) {
        currentUser.workBorders.push(JSON.parse(value.value));
      }
    };

    userList.push(currentUser);
    console.log(userList);
    handleClose();
  }


  return (
    <>
    <Button className="App-modal-button" variant="primary" onClick={handleShow}>
        Add new User
    </Button>
    
    <Modal className="App-modal" show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>Create new User</Modal.Title>
      </Modal.Header>
        <Form className="Form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter the UserName</Form.Label>
            <Form.Control type="text" placeholder="UserName" name="username"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter the password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter a first name</Form.Label>
            <Form.Control type="text" placeholder="First name" name="firstname"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter a last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" name="lastname"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose a role</Form.Label>
            <Select isMulti options = {rolesOptions} defaultValue={rolesOptions[0]} name="roles"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose the borders of the work</Form.Label>
            <Select isMulti options = {workBordersOption} name="workborders"/>
          </Form.Group>
          <>
            <Button variant="secondary" onClick={handleClose}>
              Back to list
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </>
          {/* <Form.Group>
            <Form.Label>Add an avatar</Form.Label>
            <Form.Control type="file" />
          </Form.Group> */}
        </Form>
    </Modal>
    </>
  );
}
