'use client'
import * as React from 'react';
import axios from 'axios' 
import CardUI2 from "@/src/app/components/product/card";
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';
import CONF from '@/src/app/layout'
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface GridListProps {
  currentUser?: User | null 
}

const GridList : React.FC<GridListProps> = ({
  currentUser 
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/products/')
      .then(response => {
        const jsonData = response.data;
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

       
      
      
    return (
      <Grid.Container gap={2} justify="flex-start">
      {data.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <CardUI2   image={item['image']} os={item['os']} screen={item['screen']} price={item['price']} />
        </Grid>
      ))}
    </Grid.Container>
    /*
    <Grid.Container gap={2} justify="center">
 

      {data.map(item => (
        <Grid key={item['id']}>
        
        <CardUI2 image={item['image']} os={item['os']} screen={item['screen']} />
     </Grid>
      ))}
       
</Grid.Container>
*/)
}


export default GridList