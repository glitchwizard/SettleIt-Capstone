using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SettleItAPI.Models;

namespace SettleItAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettleSheetsController : ControllerBase
    {
        private readonly SettleSheetContext _context;

        public SettleSheetsController(SettleSheetContext context)
        {
            _context = context;
        }

        // GET: api/SettleSheets
        [HttpGet]
        public IEnumerable<SettleSheet> GetSettleSheets()
        {
            return _context.SettleSheets;
        }

        // GET: api/SettleSheets/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSettleSheet([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var settleSheet = await _context.SettleSheets.FindAsync(id);

            if (settleSheet == null)
            {
                return NotFound();
            }

            return Ok(settleSheet);
        }

        // PUT: api/SettleSheets/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSettleSheet([FromRoute] long id, [FromBody] SettleSheet settleSheet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != settleSheet.SettleSheetId)
            {
                return BadRequest();
            }

            _context.Entry(settleSheet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SettleSheetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SettleSheets
        [HttpPost]
        public async Task<IActionResult> PostSettleSheet([FromBody] SettleSheet settleSheet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SettleSheets.Add(settleSheet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSettleSheet", new { id = settleSheet.SettleSheetId }, settleSheet);
        }

        // DELETE: api/SettleSheets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSettleSheet([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var settleSheet = await _context.SettleSheets.FindAsync(id);
            if (settleSheet == null)
            {
                return NotFound();
            }

            _context.SettleSheets.Remove(settleSheet);
            await _context.SaveChangesAsync();

            return Ok(settleSheet);
        }

        private bool SettleSheetExists(long id)
        {
            return _context.SettleSheets.Any(e => e.SettleSheetId == id);
        }
    }
}