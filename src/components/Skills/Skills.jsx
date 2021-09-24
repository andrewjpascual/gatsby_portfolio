import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
//Import all skill png
import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import agile from '../../images/agile.png';
import api from '../../images/api.png';
import python from '../../images/python.png';
import java from '../../images/java.png';
import bootstrap from '../../images/bootstrap.png';
import express from '../../images/express.png';
import node from '../../images/node.png';
import heroku from '../../images/heroku.png';
import react from '../../images/react.png';
import git from '../../images/git.png';
import postgre from '../../images/postgre.png';
import gatsby from '../../images/gatsby.png';
import mysql from '../../images/mysql.png';
import sass from '../../images/sass.png';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = skills;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Row className="skills-wrapper">
            <Col md={12} sm={12}>
              <div className="skills-wrapper__container">
                <div className="skills-wrapper__box">
                  <img src={html} style={{ height: '6.25rem' }} />
                  HTML
                </div>
                <div className="skills-wrapper__box">
                  <img src={css} style={{ height: '6.25rem' }} />
                  CSS
                </div>
                <div className="skills-wrapper__box">
                  <img src={javascript} style={{ height: '6.25rem' }} />
                  JavaScript
                </div>
                <div className="skills-wrapper__box">
                  <img src={react} style={{ height: '6.25rem' }} />
                  React
                </div>

                <div className="skills-wrapper__box">
                  <img src={git} style={{ height: '6.25rem' }} />
                  Git
                </div>
                <div className="skills-wrapper__box">
                  <img src={agile} style={{ height: '6.25rem' }} />
                  Agile
                </div>
                <div className="skills-wrapper__box">
                  <img src={node} style={{ height: '6.25rem' }} />
                  Node
                </div>
                <div className="skills-wrapper__box">
                  <img src={express} style={{ height: '6.25rem' }} />
                  Express
                </div>
                <div className="skills-wrapper__box">
                  <img src={api} style={{ height: '6.25rem' }} />
                  RESTful API
                </div>
                <div className="skills-wrapper__box">
                  <img src={heroku} style={{ height: '6.25rem' }} />
                  Heroku
                </div>
                <div className="skills-wrapper__box">
                  <img src={python} style={{ height: '6.25rem' }} />
                  Python
                </div>
                <div className="skills-wrapper__box">
                  <img src={java} style={{ height: '6.25rem' }} />
                  Java
                </div>
                <div className="skills-wrapper__box">
                  <img src={postgre} style={{ height: '6.25rem' }} />
                  PostgreSQL
                </div>

                <div className="skills-wrapper__box">
                  <img src={gatsby} style={{ height: '6.25rem' }} />
                  Gatsby
                </div>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
