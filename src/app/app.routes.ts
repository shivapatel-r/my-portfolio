import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Portfolio } from './components/portfolio/portfolio';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Resume } from './components/resume/resume';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';


export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'portfolio',
    component: Portfolio
  },

  {
    path: 'services',
    component: Services
  },

  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'resume',
    component: Resume
  },
{
    path: 'experience',
    component: Experience
  },
  {
    path: 'education',
    component: Education
  }

];