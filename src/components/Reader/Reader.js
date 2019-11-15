import React, { Component } from 'react';
import qs from 'query-string';
import T from 'prop-types';
import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';
import publications from '../../publications.json';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }).isRequired,
    ).isRequired,
    location: T.shape({
      pathname: T.string.isRequired,
      search: T.string.isRequired,
    }).isRequired,
    history: T.shape({
      push: T.func.isRequired,
      replace: T.func.isRequired,
    }).isRequired,
  };

  state = {
    page: 0,
  };

  componentDidMount() {
    const { location, history } = this.props;
    const parsedQuery = qs.parse(location.search).item;
    if (
      parsedQuery < 1 ||
      parsedQuery > publications.length ||
      parsedQuery <= 0
    ) {
      history.replace({
        ...location,
        search: 'item=1',
      });
      return;
    }

    if (parsedQuery) {
      this.setState({
        page: Number(parsedQuery),
      });
    }
  }

  showNextPublication = () => {
    const { history } = this.props;
    const { page } = this.state;

    history.push({
      pathname: '/reader',
      search: `?item=${page + 1}`,
    });
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  showPreviousPublication = () => {
    const { history } = this.props;
    const { page } = this.state;

    history.push({
      pathname: '/reader',
      search: `?item=${page - 1}`,
    });
    this.setState(prevState => ({ page: prevState.page - 1 }));
  };

  render() {
    const { page } = this.state;
    const { items } = this.props;
    const isNextDisabled = page === publications.length - 1;
    const isPrevDisabled = page === 0;
    return (
      <div className={styles.reader}>
        <Controls
          showNext={this.showNextPublication}
          showPrevious={this.showPreviousPublication}
          isNextDisabled={isNextDisabled}
          isPrevDisabled={isPrevDisabled}
        />
        <Counter
          currentPublication={page + 1}
          numberOfPublications={items.length}
        />
        <Publication
          currentPublicationNum={page + 1}
          publication={items[page]}
        />
      </div>
    );
  }
}
