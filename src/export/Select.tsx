import * as React from "react";
import {Checkbox, FormControlLabel, Theme, withStyles, WithStyles} from "@material-ui/core";

interface SelectProps {
  name: string;
  id: number;
  checked: boolean;
  onSelect: (id:number, value:boolean) => void;
}

const styles = (theme:Theme) => ({
});


class Select extends React.PureComponent<SelectProps> {

  public render(): React.ReactNode {
    const { name, checked } = this.props as WithStyles<typeof styles> & SelectProps;

    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={this.onChecked}
            value={true}
          />
        }
        label={name}
      />
    );
  }

  private onChecked = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { id, onSelect } = this.props;
    onSelect(id, event.target.checked);
  }
}

export default withStyles(styles)(Select);
