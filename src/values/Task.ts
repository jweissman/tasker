export type Action = 'start' | 'deliver' | 'complete' | 'accept' | 'reject'
type Status = 'ready' | 'started' | 'completed' | 'delivered' | 'finished'

export const nextActions: (status: Status) => Action[] = (status: Status) => { 
  switch(status) {
    // case 'planned': return ["plan"]
    case 'ready': return ["start"]
    case 'started': return ["complete"]
    case 'completed': return ['deliver']
    case 'delivered': return ["accept", "reject"]
    case 'finished': throw new Error("Finished is the last status!")
  }
}

export const statusFromAction: (action: Action) => Status = (action: Action) => { 
  switch(action) {
    // case 'plan': return 'ready'
    case 'start': return "started"
    case 'complete': return 'completed'
    case 'deliver': return "delivered"
    case 'accept': return "finished"
    case 'reject': return "started"
  }
}

export interface Task { id: number, title: string, status: Status }