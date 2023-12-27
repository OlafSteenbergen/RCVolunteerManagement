import React, { useState, useEffect } from 'react';
import {all_employees} from './allEmployees';

import { Card, DonutChart, BarChart, LineChart, Metric, Title, Text, Badge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { StatusOnlineIcon } from "@heroicons/react/outline";

function Home() {
      const [empl] = useState(all_employees.Employees);

      function AggregateData(x){
            const counts = {}
            
            for (const e in empl) {
                  if (counts[eval('empl[e].' + x)]) counts[eval('empl[e].' + x)]++;
                  else counts[eval('empl[e].' + x)] = 1;
            }

            const new_counts = []
            Object.keys(counts).map(function (key) {
                  new_counts.push({
                        key: key,
                        value:counts[key]
                  })
            });
            return new_counts
      }

      function MeanData(x){
            var mean = 0
            for (const e in empl) {
                  mean += empl[e].age;
            };
            return mean / Object.keys(empl).length
      }
          
          
return (
      <>
      <div className='grid grid-cols-2'>

         <div className='flex items-center justify-center'>
            <Card className="m-6 w-4/5" decoration='top'>
            <Title className='text-center'>Total number of volunteers</Title>
            <DonutChart
                  className="mt-6"
                  data={AggregateData('jobTitleName')}
                  category="value"
                  index="key"
                  colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}/>
            </Card>
         </div>

         <div className='flex items-center justify-center'>
            <Card className="m-6 w-2/4" decoration='top'>
                  <Title>Total number of volunteers</Title>
                  <Metric>{Object.keys(empl).length}</Metric>
            </Card>
            <Card className="m-6 w-2/4" decoration='top'>
                  <Title>Average age</Title>
                  <Metric>{MeanData('x')}</Metric>
            </Card>
         </div>
         </div>
         <div className='grid grid-cols-2'>
            <div className='flex items-center justify-center'>
            <Card className="m-6 w-4/5" decoration='top'>
            <Title>Volunteers by location</Title>
            <BarChart
                  className="mt-6"
                  data={AggregateData('country')}
                  index="key"
                  categories={["value"]}
                  colors={["blue"]}
                  layout='vertical'
                  showAnimation='true'
                  showLegend='false'/>
            </Card>
            </div>
            <div className='flex items-center justify-center'>
            <Card>
            <Title>Employees added over time</Title>
            <LineChart
                  className="h-72 mt-4"
                  data={AggregateData('dateAdded')}
                  index="key"
                  categories={["value"]}
                  colors={["blue"]}
                  yAxisWidth={30}
                  />
            </Card>
            </div>
      </div>

            <div className='grid grid-cols-1'>
                  <div className='flex items-center justify-center'>
                  <Card className='m-6'>
                  <Title>Last added employees</Title>
                  <Table className="mt-5">
                        <TableHead>
                        <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Position</TableHeaderCell>
                        <TableHeaderCell>Department</TableHeaderCell>
                        <TableHeaderCell>Added</TableHeaderCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {empl.map((item) => (
                        <TableRow key={item.userId}>
                              <TableCell>{item.preferredFullName}</TableCell>
                              <TableCell>
                              <Text>{item.jobTitleName}</Text>
                              </TableCell>
                              <TableCell>
                              <Text>{item.employeeCode}</Text>
                              </TableCell>
                              <TableCell>
                              {item.dateAdded}
                              </TableCell>
                        </TableRow>
                        )).sort().reverse().slice(0, 5)}
                        </TableBody>
                  </Table>
                  </Card>
                  </div>
            </div>

      </>
);
};

export default Home;