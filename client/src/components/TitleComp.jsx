import React from 'react'
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const TitleComp = ({title,subText}) => {
  return (
    <div>
         <Title style={{ textAlign: "center" }}>{title}</Title>
      <Paragraph
        type="secondary"
        style={{ textAlign: "center", fontSize: "20px" }}
      >
        {subText}
      </Paragraph>
    </div>
  )
}

export default TitleComp