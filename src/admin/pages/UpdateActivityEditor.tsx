import React from "react";
import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { BonusActivity } from "../../models/update";

interface UpdateActivityEditorProps {
  activity: BonusActivity;
  setActivity: (item: BonusActivity) => void;
  deleteActivity: () => void;
}

function UpdateActivityEditor({
  activity,
  setActivity,
  deleteActivity,
}: UpdateActivityEditorProps) {
  return (
    <ListGroup.Item className="p-0">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text className="w-100">{activity.name}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={activity.moneyAmount}
          style={{ maxWidth: "50px" }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setActivity({
              ...activity,
              moneyAmount: parseInt(event.target.value),
            })
          }
          aria-label={"bonus-activity"}
        />
        <InputGroup.Append>
          <InputGroup.Text>x GTA$</InputGroup.Text>
        </InputGroup.Append>
        <FormControl
          value={activity.rpAmount}
          style={{ maxWidth: "50px" }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setActivity({
              ...activity,
              rpAmount: parseInt(event.target.value),
            })
          }
          aria-label={"bonus-activity"}
        />
        <InputGroup.Append>
          <InputGroup.Text>x RP</InputGroup.Text>
          <Button
            variant="secondary"
            onClick={deleteActivity}
            style={{
              backgroundColor: "#e9ecef",
              borderColor: "#ced4da",
              color: "black",
            }}
          >
            Delete
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </ListGroup.Item>
  );
}

export default UpdateActivityEditor;
