import "./App.css";
import React from "react";
import QuoteCard from "./Components/QuoteCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResultBar from "./Components/ResultBar";
import Button from "react-bootstrap/Button";

function Output(props) {
  const data = props.searchResult;
  const cards = [];
  for (var i = 0; i < data.length; i++) {
    cards.push(
      <QuoteCard
        key={i}
        searchInfo={props.searchInfo}
        quote={data[i].quote}
        author={data[i].author}
        categories={data[i].tags}
        likes={data[i].likes}
        similarity={data[i].similarity}
        sentiment={data[i].sentiment}
        rank_score={data[i].rank_score}
        n_likes={data[i].normalized_likes}
      />
    );
  }

  return (
    <Container>
      <Row className="mt-4 mb-2">
        <ResultBar searchInfo={props.searchInfo} />
      </Row>
      <Row>
        <Button
          variant="outline-light"
          className="button"
          onClick={() => props.handleBack()}
        >
          Back to Search
        </Button>
      </Row>
      <Row className="m-5">
        <Col>{cards} </Col>
      </Row>
    </Container>
  );
}

export default Output;
