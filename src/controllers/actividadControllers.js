const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from actividad', (err, actividad) => {
            if(err) {
                res.json(err);
            }
            res.render('actividad', {
                data: actividad
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO actividad set ?',[data], (err, actividad) => {
            res.redirect('/');
        });
    })
};

controller.edit = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM actividad WHERE id = ?', [id], (err, actividad) => {
            res.render('act_edit', {
                data: actividad[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newActividad = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE actividad set ? WHERE id = ?', [newActividad, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM actividad WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
};

module.exports = controller;