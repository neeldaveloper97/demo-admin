import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Pagination,
  Typography,
  TextField,
  Select,
  FormControl,
  MenuItem,
  Link,
  Breadcrumbs,
} from "@mui/material";
import {
  Home,
  NotificationsNoneOutlined,
  SettingsInputComponentOutlined,
  KeyboardArrowDownOutlined,
  StarOutlineOutlined,
} from "@mui/icons-material";

import SearchBox from "../../../components/search-box/SearchBox";
import { ProjectData } from "../../../constants/Project";
import { ProjectCardListSelect } from "../../../constants/Project";
import "./Projects.scss";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [list, setList] = React.useState("");
  const [filterOptions, setFilterOptions] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: any) => {
    setList(event.target.value);
  };

  return (
    <Grid className="mainTemplate-page">
      <Grid container spacing={3} className="projectTemplate">
        <Grid item lg={6} xs={12}>
          <div className="pageBreadcrumb">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                <Home />
              </Link>
              <Typography color="text.primary">Admin</Typography>
            </Breadcrumbs>
          </div>
        </Grid>
        <Grid item lg={6} xs={12}>
          <div className="headButtons">
            <Button className="iconButton">
              <SettingsInputComponentOutlined
                onClick={() => setFilterOptions(!filterOptions)}
              />
            </Button>
            <Button onClick={handleClickOpen}>Admin Create</Button>
          </div>
        </Grid>

        {filterOptions ? (
          <>
            <Grid item lg={3} md={6} xs={12} className="projectSearchBlock">
              <SearchBox
                placeholder="Search"
                onSearch={(e) => setQuery(e.target.value)}
                searchValue={query}
              />
            </Grid>
            <Grid item lg={3} md={6} xs={12} className="projectFilterBlock">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={list}
                  onChange={(value) => handleChange(value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Show All</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} xs={12} className="projectFilterBlock">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={list}
                  onChange={(value) => handleChange(value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Date Ascending</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} xs={12} className="projectFilterBlock">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={list}
                  onChange={(value) => handleChange(value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Show All Managers</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </>
        ) : null}

        <Grid item lg={12} xs={12}>
          <h6 className="smallTitle">Projects</h6>
        </Grid>

        {ProjectData.map((project, idx) => {
          return (
            <Grid item lg={4} md={6} xs={12} key={idx}>
              <div className="projectCard">
                <div className="projectCard__head">
                  <h1 className="projectCard__Name">
                    [{project.projectCode}] -[{project.projectName}]
                  </h1>

                  <div className="projectCard__headIcons">
                    <span>
                      <NotificationsNoneOutlined />
                    </span>
                    <span>
                      <StarOutlineOutlined />
                    </span>
                  </div>
                </div>
                <div className="projectCard__body">
                  <ul className="projectCard__info">
                    <li className="projectCard__info-item">
                      <span>First Name: </span> {project.manager}
                    </li>
                    <li className="projectCard__info-item">
                      <span>Admin </span> {project.Admin}
                    </li>
                    <li className="projectCard__info-item">
                      <span>Time </span> {project.LOI}
                    </li>
                    <li className="projectCard__info-item">
                      <span>Number </span> {project.Invite}
                    </li>
                    <li className="projectCard__info-item">
                      <span>Success </span> {project.Completed}
                    </li>
                    <li className="projectCard__info-item">
                      <span>Percent </span> {project.Incidence}
                    </li>
                  </ul>
                  <div className="projectCard__selectBlock">
                    {ProjectCardListSelect.map((item, key) => {
                      return (
                        <div key={key} className="projectCard__selectBox">
                          <Typography className="projectCard__selectBox-text">
                            {item}
                          </Typography>
                          <KeyboardArrowDownOutlined />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}

        <Grid item lg={12} xs={12} className="paginationBlock">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Create Project</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-password-input"
            label="TEST"
            type="projectName"
            autoComplete="current-password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Projects;
