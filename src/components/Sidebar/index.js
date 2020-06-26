import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash'
import decode from 'jwt-decode'
import { Channels } from "components/Channels";
import { Teams } from "components/Teams";

const currentTeamId = 33

export const Sidebar = () => {
    const [loading, setLoading] = useState(true)
    const[allTeams, setAllTeams] = useState([])
    const[channels, setChannels] = useState([])
    const[team, setTeam] = useState({})

    useEffect(() => {
        axios.get('/teams').then((response) => {
            const teams = response.data
            setAllTeams(teams)
            const teamIdx =  _.findIndex(teams, ['id', currentTeamId])
            setTeam( teams[teamIdx])
        }) .catch(() => {})
    }, [])

    useEffect(() => {
        console.log('response.data')
        axios.get(`/channels/${team.id}`).then((response) => {
            setChannels(response.data)
            setLoading(false)
        }).catch((e) => {}) 
    }, [team])

    let username = ''

    if (loading) return null    

    try {
        const token = localStorage.getItem('token')
        const { user } = decode(token)
        username = user.username
        console.log(token, '++++')
    } catch (err) {}

    return (
       <>
     [
            <Teams key="team-sidebar" teams={allTeams.map(team => ({
                id: team.id,
                letter: team.name.charAt(0).toUpperCase()
            }))}>Teams</Teams>,
            <Channels
              key="channel-sidebar"
              teamName={team.name}
              username={username}
              channels={channels}
              users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
            />
       ]}
       </>
    )
}