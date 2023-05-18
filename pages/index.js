import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Draggable from '../components/Draggable';
import Stepper from '../components/Stepper'
import TwoColumns from '../components/TwoColumns'
import TextInput from '../components/TextInput2'
import RadialProgress from '../components/RadialProgress'
import KeywordsList from '../components/KeywordsList'
import ToDo from '../components/ToDo'
// import WordCloud from '../components/WordCloud'
import Loading from '../components/Loading'
import KeywordsStats from '../components/KeywordStats'
import Venn from '../components/Venn'
import Footer from '../components/Footer'
import Heading from '../components/Heading'




import { analyzer } from '../components/brains/analyzer'


// const words = ['React', 'JavaScript', 'Web Development'];
// const leftWords = ['React', 'JavaScript'];
// const rightWords = ['JavaScript', 'Web Development'];


const App = () => {
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [hasBoth, setHasBoth] = useState(false)
  const [analysis, setAnalysis] = useState([])
  const [step, setStep] = useState(0)

  useEffect(() => {
    setHasBoth(false)

    if (text1) {
      // setLoading1(false)
      setStep(1)
    }
    else {
      setStep(0)
      setAnalysis('') // ?
    }

    if (!text2 && text1) {
      // setLoading2(false)
      setStep(1)
      setAnalysis('')
    }

    if (text1 && text2) {
      setHasBoth(true)
      console.log("I am getting the analysis! from index")
      analyzer(text1, text2).then((dataNew) => {
        if (dataNew?.length > 0) {
          setAnalysis(dataNew)
          setLoading1(false)
          setLoading2(false)


        }
      })
    }
  }, [text1, text2])


  useEffect(() => {
    // console.log(analysis.length > 0, "analysis.length>0")
    if (analysis.length > 0) {
      // console.log("analysis.length>0", analysis)
      setStep(3)
    }    // console.log("loading1, loading2", loading1, loading2)
  }, [analysis])

  return (
    <div className="p-6 md:max-w-xl mx-auto lg:max-w-3xl"  >
      {/* <Stepper /> */}
      <Draggable >
        <Heading title={'App-Checker'} />
        <Stepper title={"Current Progress"} currStep={step} />
        <TextInput
          title={'Input your writing'}
          text={text1}
          getText={setText1}
          loading={loading1}
          isLoading={setLoading1}
          key={'TextInput1'} />
        <TextInput
          title={'Input the app, mission statement or description of role'}
          text={text2}
          getText={setText2}
          loading={loading2}
          isLoading={setLoading2}
          key={'TextInput2'} />
        {analysis.length > 0 && !loading1 && !loading2 &&

          <RadialProgress title={'Percent Similarity'} percent={analysis[0].similarity} />}
        {analysis.length > 0 && !loading1 && !loading2 &&

          <KeywordsStats
            title={'Matching Keywords'}
            x={analysis[0].keywordsMatching.numMatches}
            numOfNonStopWordsInApp={analysis[1].allWordsExceptStopWords.length}
          />}
        {analysis.length > 0 && !loading1 && !loading2 &&
          <KeywordsList
            title={"Keyword Comparison"}
            keywords1={analysis[0].keywords}
            keywords2={analysis[1].keywords}
            matches={analysis[0].wordsThatMatch} />
        }

        {analysis.length > 0 && !loading1 && !loading2 && <Venn title={"How many of the same words do you share with the App"} keywords1={analysis[0].allWordsExceptStopWords} keywords2={analysis[1].allWordsExceptStopWords} />}
        {analysis.length > 0 && !loading1 && !loading2 && <ToDo items={
          // item1: true,
          // item2: false,
          // item3: true,
          analysis[0].suggestions
        } title={"Suggestions for Improvement"} />}

        {loading1 && loading2 && <Loading title={"Analysis will appear here"} />}
        {analysis.length == 0 && (!loading1 && !loading2) && <div className='text-xl text-center' title={"Analysis will appear here"}> </div>}


      </Draggable>
      <Footer />
    </div>
  );
};

export default App
