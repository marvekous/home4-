var days = 'saturday'
switch (days) {
    case 'Monday':
    case 'MONDAY':
    case 'monday':
        console.log('ПОНЕДЕЛЬНИК')
        break;
        case 'Tuesday':
            case 'TUESDAY':
            case 'tuesday':
        console.log('ВТОРНИК')
        break;
        case 'Wenesday':
                case 'WENESDAY':
                case 'wenesday':
         console.log('СРЕДА')
         case 'Thursday':
            case 'THURSDAY':
            case 'thursday':
        console.log('ЧЕТВЕРГ')
        break;
        case 'Friday':
    case 'FRIDAY':
    case 'friday':
        console.log('ПЯТНИЦА')
        default:
            console.log ('unknow size');  
        }
