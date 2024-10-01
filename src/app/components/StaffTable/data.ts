
interface StaffMember {
  name: string;
  image:string;
  classes: string[];
  location: string[];
  subjects: string[];
  status: string;
}

export  const staffData: StaffMember[] = [
    {
      name: 'Mrs. Ajah Naomi Olatunji',
      image:'/assets/profile.png',
      classes: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2'],
      location: ['Ajah', 'Ikeja'],
      subjects: ['Mathematics', 'Physics'],
      status: 'Active',
    },
    {
      name: 'Mr. Isaac Noah Kogberegbe',
      image:'',
      classes: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2'],
      location: ['Ajah', 'Lekki'],
      subjects: ['Mathematics', 'Chemistry'],
      status: 'Upcoming',
    },
    {
      name: 'Mrs. Ajanlekoko Eunice Good',
      image:'',
      classes: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2'],
      location: ['Ajah'],
      subjects: ['Mathematics', 'Biology'],
      status: 'Upcoming',
    },
    {
      name: 'Mrs. Rain Agbebi Sunmisola',
      image:'',
      classes: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2'],
      location: ['Lekki'],
      subjects: ['Mathematics', 'English'],
      status: 'Upcoming',
    },
    {
      name: 'Mr. Shore Ikumapayi Jones',
      image:'',
      classes: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2'],
      location: ['Lekki'],
      subjects: ['Mathematics', 'Economics'],
      status: 'Upcoming',
    },
    {
      name: 'Mr. Bayo Adeniji Jones',
      image:'',
      classes: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2'],
      location: ['Ikeja','Lekki'],
      subjects: ['Mathematics', 'Economics'],
      status: 'Cancelled',
    },
  ];