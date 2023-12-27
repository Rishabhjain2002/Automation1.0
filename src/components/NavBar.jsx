import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const HoverDropdown = ({ title, id, children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  
  return (
    <NavDropdown
      title={title}
      id={id}
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
     
      className="dropdown-menu-end"
    >
      {children}
    </NavDropdown>
  );
};

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand >
            <Link to='/home' style={{ textDecoration: 'none', color: 'black', fontWeight: 'normal', marginRight: '30px' }} >Oracle DB <br />Enterprise Manager</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <HoverDropdown title='Host' id='host'>
                <NavDropdown.Item >
                  <Link to='/configmanage' style={{ textDecoration: 'none', color: 'black' }}>Information</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                  <HoverDropdown title='Utilization' id='utilization'>
                  <NavDropdown.Item >
                    <Link to='/serverload' style={{ textDecoration: 'none', color: 'black' }}> Server Load </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item >
                    <Link to='/cpu' style={{ textDecoration: 'none', color: 'black' }}>CPU details</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item >
                    <Link to='/memory' style={{ textDecoration: 'none', color: 'black' }}>Memory</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    <Link to='/swap' style={{ textDecoration: 'none', color: 'black' }}>SWAP</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    <Link to='/queuelength' style={{ textDecoration: 'none', color: 'black' }}>
                      I/O Queue Length</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    <Link to='/network' style={{ textDecoration: 'none', color: 'black' }}>Network</Link> </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to='/filesystem' style={{ textDecoration: 'none', color: 'black' }}>  File System</Link></NavDropdown.Item>
                </HoverDropdown>
                <NavDropdown.Divider />
                <HoverDropdown title="Operation" id="operation">
                  <NavDropdown.Item ><Link to='/housekeeping' style={{ textDecoration: 'none', color: 'black' }}> HouseKeeping</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/swapmonitoring' style={{ textDecoration: 'none', color: 'black' }}> CPU & SWAP monitoring</Link>
                  </NavDropdown.Item>
                </HoverDropdown>
              </HoverDropdown>

              <HoverDropdown title="Database" id="database">
                <HoverDropdown title="Information" id="information">
                  <NavDropdown.Item ><Link to='/sgainfo' style={{ textDecoration: 'none', color: 'black' }}> SGA</Link></NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/initparam' style={{ textDecoration: 'none', color: 'black' }}>Initializing Parameter</Link> </NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item><Link to='/controlfile' style={{ textDecoration: 'none', color: 'black' }}>Control Files</Link></NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/redo' style={{ textDecoration: 'none', color: 'black' }}>Redo Log Files</Link> </NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/tablespace' style={{ textDecoration: 'none', color: 'black' }}> Tablespaces</Link>
                  </NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/datafiles' style={{ textDecoration: 'none', color: 'black' }}> Data Files</Link>
                  </NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/temporaryfiles' style={{ textDecoration: 'none', color: 'black' }}> Temporary Files</Link>
                  </NavDropdown.Item>
                </HoverDropdown>
                <NavDropdown.Divider />


                <HoverDropdown title="Monitoring" id="monitoring" className="custom-dropdown-menu">
                  <NavDropdown.Item ><Link to='/freespace' style={{ textDecoration: 'none', color: 'black' }}>Free-Space in Tablespaces</Link> </NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/topsession' style={{ textDecoration: 'none', color: 'black' }}> Top Sessions</Link></NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/dbsync' style={{ textDecoration: 'none', color: 'black' }}> Standby Database Syncing</Link></NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/topsql' style={{ textDecoration: 'none', color: 'black' }}> Top SQLs</Link></NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/backup' style={{ textDecoration: 'none', color: 'black' }}> Backup</Link></NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item ><Link to='/session' style={{ textDecoration: 'none', color: 'black' }}> Session & SQL Analysis</Link></NavDropdown.Item>
                </HoverDropdown>
                <NavDropdown.Divider />

                <HoverDropdown title="Operation" id="dbOperation">

                  <NavDropdown.Item ><Link to='/operation' style={{ textDecoration: 'none', color: 'black' }}>Account Unlock/ Password Reset</Link>  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''>Patching</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''>Statistics Gathering</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''>SQL Execution</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''>Partitions</NavDropdown.Item>
                </HoverDropdown>
                <NavDropdown.Divider />
                <HoverDropdown title="Provisioning" id="provisioning">
                  <NavDropdown.Item href=''>RDBMS installation</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href=''>DataFile Addition</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href=''>Schema Creation</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href=''>Tablespace Creation</NavDropdown.Item>
                </HoverDropdown>
                <NavDropdown.Divider />
                <HoverDropdown title='Security '>
                  <NavDropdown.Item>TDE Encryption Wallet password Change</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>ADMIN password Change</NavDropdown.Item>
                </HoverDropdown>
                <NavDropdown.Divider />
                <HoverDropdown title='Audit'>
                  <NavDropdown.Item>License compliance audit</NavDropdown.Item>
                </HoverDropdown>
                <NavDropdown.Divider />
                <HoverDropdown title="Diagnostics" id="diagnostics">
                  <NavDropdown.Item href=''>AWR Report</NavDropdown.Item>
                </HoverDropdown>
              </HoverDropdown>
              <HoverDropdown title="Settings" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">
                  User Administration
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  <Link to='/dbresource' style={{ textDecoration: 'none', color: 'black' }}> Oracle Database Inventory</Link>

                </NavDropdown.Item>
              </HoverDropdown>
              <HoverDropdown title='Exadata'>
                <NavDropdown.Item>
                  <Link to='/information' style={{ textDecoration: 'none', color: 'black' }}>Information</Link></NavDropdown.Item>


              </HoverDropdown>
              <Nav.Link href="#" >
                Log-Out
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default NavBar