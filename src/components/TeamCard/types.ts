interface ITeam {
  name: string
  role: string
  email: string
  avatar: string
}

export interface ITeamCardProps {
  team: ITeam[]
}
