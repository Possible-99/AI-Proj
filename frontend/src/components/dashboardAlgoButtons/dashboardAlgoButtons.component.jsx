import React from 'react'
import { Row, Col,Typography,Divider } from "antd";
import { Link } from "react-router-dom";
import { Card } from "antd";
const { Title } = Typography;

const DashboardAlgoButtons=()=>{

    return(
      <div style={{display:"block",margin:"0 0 40px 0"}}>
        <Title>Selecciona un algoritmo</Title>
        <Row
            gutter={[
              { xs: 8, sm: 14, md: 24, lg: 32 },
              { xs: 14, sm: 14, md: 14, lg: 32 },
            ]}
            style={{ marginBottom: "10px", height: "140px" }}
          >
            <Col
              lg={{ span: 4 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Link to="/priori">
                <Card className="card-algorithm " hoverable>
                  <span>Algoritmo apriori</span>
                </Card>
              </Link>
            </Col>
            <Col
              lg={{ span: 5 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Link to="/metricas">
                <Card className="card-algorithm " hoverable>
                  <span>Métricas de similitud</span>
                </Card>
              </Link>
            </Col>
            <Col
              lg={{ span: 5 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Link to="/clustering-jerarquico">
                <Card className="card-algorithm " hoverable>
                  <span>Clustering Jerárquico</span>
                </Card>
              </Link>
            </Col>
            <Col
              lg={{ span: 5 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Link to="/clustering-particional">
                <Card className="card-algorithm " hoverable>
                  <span>Clustering Particional</span>
                </Card>
              </Link>
            </Col>
            <Col
                lg={{ span: 5 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                <Link to="/regresion-logistica">
                  <Card className="card-algorithm " hoverable>
                    <span>Regresión Logistica</span>
                  </Card>
                </Link>
              </Col>
          </Row>
          </div>
    )
}

export default DashboardAlgoButtons;