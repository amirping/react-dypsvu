import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data: [
        {
          id: 'p1', name: 'parent1', childdep: [
            { id: 'depchil1', name: 'dispchil1' ,childdep:[
              { id: 'lota1', name: 'departement m3afet 1 ' },
              { id: 'lota2', name: 'departement m3afet 2' }
            ] },
            { id: 'depchil2', name: 'dispchil2' },
            { id: 'depchil3', name: 'dispchil3' }
          ]
        },
        {
          id: 'p2', name: 'parent2', childdep: [
            { id: 'depchil4', name: 'dispchil4' },
            { id: 'depchil5', name: 'dispchil5' },
            { id: 'depchil6', name: 'dispchil6' }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <Box color="text.primary" >
      {this.state.data.map(dep=>(
        <ExpansionPanel key={dep.id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={dep.id}
          >
          <div className="fakeHead">
            <div>
              <Typography>{dep.id}</Typography>
            </div>
            <div >
              <Typography >{dep.name}</Typography>
            </div>
          </div>
          </ExpansionPanelSummary>
          {dep.childdep && dep.childdep.length > 0 && (<ExpansionPanelDetails>
            <Table >
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">name</TableCell>           
              </TableRow>
            </TableHead>
            <TableBody>
              {dep.childdep.map(row => {
                if(row.childdep && row.childdep.length > 0){
                  return (
                    
                    <TableRow colSpan={2}>
                    <TableCell colSpan={2}>
                     <div className="allspace">
                     <ExpansionPanel square className="fullwidth paddingNone noBox" key={row.id}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        className="paddingNone"
                        id={row.id}>
                        <div className="fakeHead2">
                        <div>
                          <Typography>{row.id}</Typography>
                        </div>
                        <div >
                          <Typography >{row.name}</Typography>
                        </div>
                      </div>
                      </ExpansionPanelSummary>
                       <ExpansionPanelDetails>
                        <Table>
                           <TableBody>
                        {row.childdep.map(more=>(
                        
                            <TableRow>
                            <TableCell>{more.id}</TableCell>
                            <TableCell>{more.name}</TableCell>
                            </TableRow>
                            
                        ))}
                         </TableBody>
                        </Table>
                    </ExpansionPanelDetails>
                    </ExpansionPanel> 
                     </div>  
                     </TableCell> 
                       
                    </TableRow>
                                 
                      )
                }else{
                  return (<TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>      
                </TableRow>)
                }
              })}
            </TableBody>
          </Table>
          </ExpansionPanelDetails>)}
        </ExpansionPanel>
      ))}       
      </Box>
    );
  }
}

render(<App />, document.getElementById('root'));
