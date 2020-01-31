import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTeams = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/teams.json`)
    .then((result) => {
      const allTeamsObj = result.data;
      const teams = [];
      if (allTeamsObj != null) {
        Object.keys(allTeamsObj).forEach((teamId) => {
          const newTeam = allTeamsObj[teamId];
          newTeam.id = teamId;
          teams.push(newTeam);
        });
      }
      resolve(teams);
    })
    .catch((error) => reject(error));
});

const getSingleTeam = (teamId) => axios.get(`${baseUrl}/teams/${teamId}.json`);

const deleteTeam = (teamId) => axios.delete(`${baseUrl}/teams/${teamId}.json`);

const createTeam = (newTeam) => axios.post(`${baseUrl}/teams.json`, newTeam);

const WaitlistTeam = (teamId, waitlistTeamInfo) => axios.put(`${baseUrl}/teams/${teamId}.json`, waitlistTeamInfo);

export default {
  getTeams,
  getSingleTeam,
  deleteTeam,
  createTeam,
  WaitlistTeam,
};
