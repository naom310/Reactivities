export interface Activity 
{
    id: string
    title: string
    date: string
    description: string
    category: string
    city: string
    venue: string
}
/* 
investigar diferencia entre interface y type como palabra reservada en TypeScript

export type Activity = 
{
    id: string
    title: string
    date: string
    description: string
    category: string
    city: string
    venue: string
} 
*/