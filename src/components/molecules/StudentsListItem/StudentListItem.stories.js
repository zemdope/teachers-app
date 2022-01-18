import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentListItem',
  component: StudentsListItem
};

const Template = (args) => <StudentsListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: {
    name: 'Romulad Jasiński',
    attendance: '59%',
    average: '3.5'
  }
};
