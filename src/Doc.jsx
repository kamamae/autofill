'use client'
import React from 'react'
import styles from './page.module.css'
import InputDropDown from './InputDropDown'

function Doc() {
  const inputReference = React.useRef(null);


  function focusNext(index) {
    inputReference.current.children[index+1].focus()
  };
  function focusPrevious(index) {
    inputReference.current.children[index-1].focus()
  }


  const ThirtyEightInputs = () => {
    const nums = [...Array(38).keys()]
    return nums.map((x, i) => {
      return <input key={i} onChange={(event) => event.nativeEvent.inputType == "deleteContentBackward" ? focusPrevious(i) : focusNext(i)} className={styles.digit} size={1} type="text" maxlength="1"/>
    })
    
  }

  return (
    <div className={styles.docBody}>
      <header>
        <div className={styles.heading}><b>
        Номер УИН   1881006123000<InputDropDown width={7}/> <br/>
        ПОСТАНОВЛЕНИЕ <br/>
        по делу административном правонарушении
        </b></div>
        <div className={styles.aboutMe}>
        «<InputDropDown width={2}/>»<InputDropDown/>.2023г. г.Ростов-на-Дону ул.  <InputDropDown width={40}/>
        <br/>Я, <InputDropDown width={124} data={JSON.parse(localStorage.getItem("fio"))} name="fio"/>
        <InputDropDown width={128} data={JSON.parse(localStorage.getItem("fio"))} name="fio"/>
        <div style={{fontSize: '12pt'}}>рассмотрев обстоятельства совершения административного правонарушения установил, что гражданин (ка)</div>
        </div>
      </header>
      
      <main>
        <div className={styles.condition}>
          <div ref={inputReference} className={styles.digits}>
            <ThirtyEightInputs/>
          </div>
        ​<div className={styles.fio}><div className={styles.fioChild}>фамилия</div> <div className={styles.fioChild}>​имя</div> <div className={styles.fioChild}>​отчество</div></div> <br/><InputDropDown/> 
        Место рождения <InputDropDown width={84}/> 
        <br/>русским языком <InputDropDown/> 
        Гражданство <InputDropDown width={67}/> 
        <br/>водительское удостоверение 
        (документ, удостоверяющий личность)
        <InputDropDown width={14}/>от<InputDropDown width={14}/>
        <br/>зарегистрированный (ая) по месту жительства/пребывания <InputDropDown width={48}/>
        <br/>фактически проживающий (ая) <InputDropDown width={86}/> 
        {/* <br/> <InputDropDown width={50}/> */}
        тел.8- <InputDropDown width={10}/> 
        работающий (ая)/служащий (ая) <InputDropDown width={60}/>
        управляя транспортным средством <InputDropDown width={30}/>
        г\н <InputDropDown width={18}/>
        принадлежащим <InputDropDown width={103}/> категории «<InputDropDown width={2}/>»
        «<InputDropDown width={2}/>»<InputDropDown/>.2023г. в <InputDropDown width={2}/> ч. <InputDropDown width={2}/> мин 
        г.Ростов-на-Дону ул.<InputDropDown width={23}/> 
        <div style={{fontSize: '12pt'}}><InputDropDown width={40}/>, чем нарушил(а) требования п.п.<InputDropDown/> ПДД РФ, 
        т.е. совершил (а) административное правонарушение, 
        предусмотренное частью <InputDropDown width={5}/> статьи (ей)<InputDropDown/> Кодекса Российской Федерации об административных правонарушениях/Закон субъекта РФ, предусматривающих административную ответственность за совершение административного правонарушения/основания прекращения производства по делу.
<br/>При наличии указать соответствующий пункт части 1 ст.4.2 КоАП РФ, и части 1 ст.4.3 КоАП РФ.
<br/>обстоятельства, смягчающие административную ответственность  <InputDropDown width={54}/>
<br/>обстоятельства, отягчающие административную ответственность  <InputDropDown width={54}/>
<br/>На основании нижеизложенного, учитывая ст.4.1;4.2;4.3;24.1;26.1;29.1, и руководствуясь ст.24.1, 26.1, 28.6, 29.9, 29.10 Кодекса РФ об АП</div>
        </div>
        <div className={styles.solution}>
        <center><h4 style={{margin: '20px 0'}}>ПОСТАНОВИЛ</h4></center>
Признать гражданина(ку) <InputDropDown width={94} />
<br/>Виновным (ой) в совершении п.п.1.3,12.4 ПДД РФ, ответственность за которое предусмотрена ч.4 ст.12.16 КРФ об АП, 
наложить административный штраф в размере <InputDropDown width={37}/> (<InputDropDown width={50}/>) рублей, <InputDropDown/> копеек
<br/>С нарушением согласен. События административного правонарушения и назначенное наказание не оспариваю ٧<InputDropDown/>
Лицу, в отношении которого возбуждено дело об административном правонарушении, права, предусмотренные статьей 25.1
Кодекса РФ об административных правонарушениях и ст.51 Конституцией РФ разъяснены ٧<InputDropDown/>
Право, порядок и сроки обжалования постановления по делу, предусмотренные статьями 30.1, 30.2, 30.3 Кодекса РФ об
Административных правонарушениях, разъяснены ٧<InputDropDown/>
Положения статьи 32.2 Кодекса РФ об административных правонарушениях, предусматривающие уплату административного
штрафа не позднее 60 дней со дня вступления постановления в законную силу, и статьи 20.25 Кодекса РФ об
административных правонарушениях, предусматривающие обязанность за неуплату административного штрафа в установленный
срок, части  11 ст. 27.13 КоАП РФ, предусматривающие обязанность по уплате стоимости перемещения постановления
административный штраф может быть уплачен в размере половины суммы, а именно в размере <InputDropDown/> рублей, за исключением
ч 1.1 ст. 12.1, 12.8, ч.ч. 6.7 ст 12.9, ч 3 ст. 12.12  ч. 5 ст. 12.15, ч. 3.1 ст. 12.16, 12.24, ч. 3 ст. 12.27 КоАП РФ٧<InputDropDown/>
<br/>Копию постановления получил(а)      «<InputDropDown width={2}/>»<InputDropDown/>.2023г. ٧<InputDropDown/>
 
        </div>
      </main>

      <footer>
        <div className={styles.conclusion}>
          Должностное лицо, вынесшее постановление по делу:<InputDropDown/>
          <br/>Дата вступления в законную силу «<InputDropDown width={2}/>» <InputDropDown/>2023г. <InputDropDown/>
          <br/>Информация о получателе штрафа, необходимая в соответствии с правилами заполнения расчетных документов на перечисление
          суммы административного штрафа,  сведения о вручении бланка платежного документа, содержащего указанную информацию (в
          случае наложения административного штрафа) 
          <br/>Реквизиты на уплату административного штрафа получил ٧ <InputDropDown/>
        </div>
        <div className={styles.formalData}>
          <p>Наименование получателя:</p> 
          <p>УФК по Ростовской области (ГУ МВД России по</p> 
          <p> Ростовской области)  Счет № 03100643000000015800</p>
          <p> Банк получателя: ОТДЕЛЕНИЕ РОСТОВ-НА-ДОНУ//УФК по Ростовской области</p>
          <p> г. Ростов-на-Дону  Счет № 40102810845370000050</p>
          <p>БИК 016015102   ИНН 6164049013</p>
          <p>ОКТМО 60701000  КПП 616401001    КБК 18811601121010001140</p>
        </div>
      </footer>
    </div>
  )
}

export default Doc