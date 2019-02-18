$('#search').click(function () {
    $.getJSON("block.json", function (d) {
        var s = $('#userId').val().trim();
        var r = new RegExp(s, 'i');
        var o;

        $.each(d, function (k, v) {
            var c = new Date(v.Date).format("dd/mm/yyyy");
            if (v.Message.search(r) != -1) {
                o +=
                    `<tr>
                            <td class=${k} scope="row">
                                <a href="https://fb.com/${v.ID}" target="_blank" rel="noopener noreferrer"> ${v.ID} </a>
                            </td>
                            <td class=${k}> ${v.Message}</td>
                            <td class=${k}> ${c}</td>
                            <td>
                                <a href="https://fb.com/${v.UID}" target="_blank" rel="noopener noreferrer"> ${v.Name} </a>
                            </td>
                            </tr>`
            } else {o+=''}
        });
        $('tbody').html(o);
        if ($('tbody').html() == 'undefined') {
            $('.table').hide();
            $('.error').show()
        } else {
            $('.table').show();
            $('.error').hide()
        }
    })
})