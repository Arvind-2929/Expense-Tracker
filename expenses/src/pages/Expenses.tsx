import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ExpenseListTab } from '../components/ExpenseListTab'

export const Expenses = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Expenses</Tab>
        <Tab>Dashboard</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ExpenseListTab />
        </TabPanel>
        <TabPanel>
          <p>Dashboard!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}