import React,{ useState } from 'react';

import Container from './components/Container';
import Input     from './components/Input';
import Button    from './components/Button';
import History    from './components/History';

const App = (props) => {

    const [num,setNum]       = useState(0);
    const [oldNum,setOldNum] = useState(0);
    const [oper,setOperator] = useState(0);

    const [hist,setHist]     = useState('');

    function getNum(e){

        let value = e.target.value;

        if(num === 0)
        {
            setNum(value);
        }
        else
        {
            setNum(num + value);
        }
    }

    function clear()
    {
        setNum(0);
        setHist('');
    }

    function getOperator(e){
        
        let value = e.target.value;
        let oper  = value;

        setOldNum(num);
        setNum(0);
        setOperator(oper);
    }

    function calculate(){

        let history = oldNum+' '+oper+' '+num;

        setHist(history);

        if(oper == '+')
        {
            let result = parseInt(num) + parseInt(oldNum);

            setNum(result);
        }
        else if(oper == '-')
        {
            let result = parseInt(num) - parseInt(oldNum);

            setNum(Math.abs(result));
        }
        else if(oper == 'x')
        {
            let result = parseInt(num) * parseInt(oldNum);

            setNum(result);
        }
        else if(oper == '/')
        {
            let result = parseInt(num) / parseInt(oldNum);

            setNum(result);
        }
        else
        {
            setNum(0);
        }
    }

    return(
        <div className='App'>
            <div className='main'>

                <Container>

                    <History
                        title={hist}
                    />

                    <Input
                        id='calc_result'
                        type='text'>

                        {num}
                    
                    </Input>

                    <div className='buttons'>

                        <div className='oper-buttons'>
                            <Button
                                class='operator'
                                onclick={getOperator}
                                title='+'
                            />
                            <Button
                                class='operator'
                                onclick={getOperator}
                                title='-'
                            />
                            <Button
                                class='operator'
                                onclick={getOperator}
                                title='x'
                            />
                            <Button
                                class='operator'
                                onclick={getOperator}
                                title='/'
                            />
                        </div>
                        
                        <div className='number-buttons'>
                            <Button
                                class='number'
                                onclick={getNum}
                                title={9}
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={8}
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={7}
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={6}
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={5}
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={4}
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={3}
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={2}
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={1}
                            />
                            <Button
                                onclick={getNum}
                                title='.'
                            />
                            <Button
                                class='number'
                                onclick={getNum}
                                title={0}
                            />
                            <Button
                                onclick={clear}
                                title='ac'
                            />
                            <Button
                                    onclick={calculate}
                                    title='='
                                    class='submit-button'
                                    type='submit'
                                />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
export default App;