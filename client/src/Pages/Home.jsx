import React, { useEffect, useState } from 'react';
import Graph from '../components/Graph';
import styles from '../components/Home.module.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [dailyAgent, setDailyAgent] = useState([]);
  const [yerlyAgent, setYearlyAgent] = useState([]);
  const [dailyCommand, setDailyCommand] = useState([]);
  const [yearlyCommand, setYearlyCommand] = useState([]);
  const dailyAgentData = useFetch(`/daily-agent/${auth?.user?._id}`);
  const yearlyAgentData = useFetch(`/yearly-agent/${auth?.user?._id}`);
  const dailyCommandData = useFetch(`/daily-command/${auth?.user?._id}`);
  const yearlyCommandData = useFetch(`/yearly-command/${auth?.user?._id}`);
  const dailyTargetData = useFetch(`/target-command/${auth?.user?._id}`);
  const amountTargetData = useFetch(`/target-agent/${auth?.user?._id}`);
  const [amount, setAmount] = useState('');
  const [dailyTarget, setDailyTarget] = useState('');
  
  useEffect(() => {
    setAmount(amountTargetData?.data);
  }, [amountTargetData?.data]);
  
  useEffect(() => {
    setDailyTarget(dailyTargetData?.data);
  }, [dailyTargetData?.data]);

  useEffect(() => {
    setDailyAgent(dailyAgentData.data);
  }, [dailyAgentData.data]);

  useEffect(() => {
    setYearlyAgent(yearlyAgentData.data);
  }, [yearlyAgentData.data]);

  useEffect(() => {
    setDailyCommand(dailyCommandData.data);
  }, [dailyCommandData.data]);

  useEffect(() => {
    setYearlyCommand(yearlyCommandData.data);
  }, [yearlyCommandData.data]);

  const dayAgent = getagent(dailyAgent);
  const annulAgent = getagent(yerlyAgent);
  const dayCommand = getCommand(dailyCommand);
  const annulCommand = getCommand(yearlyCommand);

  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${styles.rowColsMd2} ${styles.mx3}`}>
        <div className={styles.smallerBlock}>
          <div className={styles.smallerBlock}>
            <h4 className={`${styles.fwBold} ${styles.smallerText}`}>Total amount</h4>
            <h4 className={`${styles.textPrimary} ${styles.smallerText}`}>{amount?.amount}$</h4>
          </div>
        </div>

        <div className={styles.smallerBlock}>
          <div className={styles.smallerBlock}>
            <h4 className={`${styles.fwBold} ${styles.smallerText}`}>Daily target</h4>
            <h4 className={`${styles.textPrimary} ${styles.smallerText}`}>{dailyTarget?.target}$</h4>
          </div>
        </div>
      </div>

      <div className={`${styles.row} ${styles.rowColsMd2} ${styles.w100}`}>
        <div className={styles.p2}>
          <Graph
            labelValue="Daily agent sales"
            labelColor="var(--color-dark-cyan)"
            title="Daily agent sales"
            yAxis={dayAgent?.ydata}
            xAxis={dayAgent?.xdata}
            color={"var(--color-dark-cyan)"}
          />
        </div>
        <div className={styles.p2}>
          <Graph
            labelValue="Daily team sales"
            labelColor="var(--color-transperent-dark-blue)"
            title="Daily team sales"
            yAxis={dayCommand?.ydata}
            xAxis={dayCommand?.xdata}
            color={"var(--color-transperent-dark-blue)"}
          />
        </div>
      </div>
      <div className={`${styles.row} ${styles.rowColsMd2} ${styles.w100}`}>
        <div className={styles.p2}>
          <Graph
            labelValue="Yearly results agents"
            labelColor="var(--color-light-yellow)"
            title="Yearly results agents"
            yAxis={annulAgent?.ydata}
            xAxis={annulAgent?.xdata}
            color={"var(--color-light-yellow)"}
          />
        </div>
        <div className={styles.p2}>
          <Graph
            labelValue="Top agents daily"
            labelColor="var(--color-light-green)"
            title="Top agents"
            yAxis={annulCommand?.ydata || []}
            xAxis={annulCommand?.xdata || []}
            color={"var(--color-light-green)"}
          />
        </div>
      </div>
      <div className={`${styles.textCenter} ${styles.mt4} ${styles.pb4}`}>
        <button onClick={() => navigate('/editor', { state: 'Editor Page' })} className={`${styles.btn} ${styles.btnGreen}`}>
          Editor Page
        </button>
      </div>
    </div>
  );
};

export default Home;

const getagent = (data) => {
  const ydata = [];
  const xdata = [];
  if (Array.isArray(data)) {
    data.forEach((d) => {
      ydata.push(parseFloat(d.sales) || 0);
      xdata.push(`${d.agentname} (${d.sales}$)`);
    });
  }
  return { ydata, xdata };
};

const getCommand = (data) => {
  const ydata = [];
  const xdata = [];
  if (Array.isArray(data)) {
    data.forEach((d) => {
      ydata.push(d.sales);
      xdata.push(`${d.country} (${d.sales}$)`);
    });
  }
  return { ydata, xdata };
};
