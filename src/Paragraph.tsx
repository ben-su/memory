import React, { Component } from "react";
import { CustomText } from "./CustomText";
import styles from "./Paragraph.module.scss";

interface Props {
  text: string;
}

interface State {
  count: number;
}

export class Paragraph extends Component<Props, State> {
  public readonly state: State = { count: 12 };

  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { text } = this.props;
    return (
      <div className={styles.p}>
        <div className={styles.shiny}>
          <CustomText text={text} />
        </div>
        <button onClick={() => this.onButtonClick(1)}>Schwein</button>
        <button onClick={() => this.onButtonClick(-1)}>Kuh</button>
        <span>Current Value: {this.state.count}</span>
      </div>
    );
  }

  private onButtonClick = (val: number) =>
    this.setState({ count: this.state.count += val });
}
